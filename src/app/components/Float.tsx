
'use client';
import React, { useEffect, useRef } from 'react';
import './Float.scss'

type Props = {};

const Float: React.FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;

    if (!canvas || !img) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
        return;
      }

    
    function mix(a: number, b: number, l: number) {
      return a + (b - a) * l;
    }

    function upDown(v: number) {
      return Math.sin(v) * 0.5 + 0.5;
    }

    function render(time: number) {
      time *= 0.001;

    

      resize(canvas!);

      var t1 = time;
      var t2 = time * 0.2;

      for (var dstY = 0; dstY < canvas!.height; ++dstY) {
        var v = dstY / canvas!.height;
        var off1 = Math.sin((v + 0.5) * mix(3, 12, upDown(t1))) * 100;
        var off2 = Math.sin((v + 0.5) * mix(3, 12, upDown(t2))) * 100;
        var off = off1 + off2;

        var srcY = dstY * img!.height / canvas!.height + off;

        srcY = Math.max(0, Math.min(img!.height - 1, srcY));

        ctx!.drawImage(
          img!,
          0, srcY, img!.width, 1,
          0, dstY, canvas!.width, 1
        );
      }

      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

  }, []);

  function resize(canvas: HTMLCanvasElement) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width !== canvas.width || height !== canvas.height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  return (
    <div>
        <canvas className='canvas' ref={canvasRef}>
            <img
            className='image'
            ref={imgRef}
            src={'/profile.jpg'}
            alt=''
            />
        </canvas>
    </div>
  );
};

export default Float;