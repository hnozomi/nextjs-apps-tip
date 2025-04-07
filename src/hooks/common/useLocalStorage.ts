import { useState, useEffect } from 'react';

/**
 * ローカルストレージを操作するためのフック
 * 複数の機能で共有される汎用的なフック
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // 初期値の取得
  const getStoredValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // 状態の初期化
  const [storedValue, setStoredValue] = useState<T>(getStoredValue);

  // 値を更新する関数
  const setValue = (value: T) => {
    try {
      // 新しい値を状態に保存
      setStoredValue(value);
      
      // localStorage に保存
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // 他のタブやウィンドウでの変更を監視
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    // イベントリスナーを追加
    window.addEventListener('storage', handleStorageChange);
    
    // クリーンアップ関数
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
