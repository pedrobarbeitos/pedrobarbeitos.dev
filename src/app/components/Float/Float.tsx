'use client';
import React, { useEffect, useRef } from 'react';
import './Float.scss';

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
      return Math.sin(v) * 0.5 + 0.1;
    }

    function render(time: number) {
      time *= 0.001;
      const { width: canvasWidth, height: canvasHeight } = resize(canvas!);
      ctx!.clearRect(0, 0, canvasWidth, canvasHeight);

      let imgAspectRatio = img!.width / img!.height;
      let drawWidth = canvasWidth;
      let drawHeight = canvasWidth / imgAspectRatio;

      if (drawHeight < canvasHeight) {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgAspectRatio;
      }

      const xOffset = (canvasWidth - drawWidth) / 2;

      var t1 = time;
      var t2 = time * 0.5;

      const heightDiff = drawHeight - canvasHeight;

      for (var dstY = 0; dstY < canvasHeight; ++dstY) {
        var v = dstY / canvasHeight;
        var off1 = Math.sin((v + 0.5) * mix(3, 12, upDown(t1))) * 0;
        var off2 = Math.sin((v + 0.5) * mix(3, 12, upDown(t2))) * 30;
        var off = off1 + off2;

        var srcY = (dstY + heightDiff) * img!.height / drawHeight + off;
        srcY = Math.max(0, Math.min(img!.height - 5, srcY));

        ctx!.drawImage(
          img!,
          0, srcY, img!.width, 1,
          xOffset, dstY, drawWidth, 1  
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

    return { width, height };
  }

  return (
    <div className='containerCanvas'>
      <canvas className='canvas' ref={canvasRef}></canvas>
      <img
        ref={imgRef}
        src={'/profile.jpg'}
        alt=''
        style={{ display: 'none' }} // Hide the image element
      />
    </div>
  );
};

export default Float;