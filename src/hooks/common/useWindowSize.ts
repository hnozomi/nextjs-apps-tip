import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * ウィンドウサイズを監視するフック
 * 複数の機能で共有される汎用的なフック
 */
export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // ウィンドウのリサイズイベントをハンドリングする関数
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // イベントリスナーを追加
    window.addEventListener('resize', handleResize);
    
    // 初期値を設定
    handleResize();
    
    // クリーンアップ関数
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
