"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export default function Loader({ className }){
  return (
    <div className={cn(
      "w-[calc(3*30px+26px)] h-[calc(2*30px+26px)]",
      "mx-auto my-[10px] mb-[30px] relative",
      className
    )}>
      <div className="absolute inline-block w-[26px] h-[26px] rounded-[2px] bg-primary animate-[square1_2.4s_0.2s_ease-in-out_infinite,squarefadein_0.4s_0.1s_ease-out_both]"
           style={{ left: 'calc(0 * 30px)', top: 'calc(0 * 30px)' }} id="square1" />
      <div className="absolute inline-block w-[26px] h-[26px] rounded-[2px] bg-primary animate-[square2_2.4s_0.2s_ease-in-out_infinite,squarefadein_0.4s_0.1s_ease-out_both]"
           style={{ left: 'calc(0 * 30px)', top: 'calc(1 * 30px)' }} id="square2" />
      <div className="absolute inline-block w-[26px] h-[26px] rounded-[2px] bg-primary animate-[square3_2.4s_0.2s_ease-in-out_infinite,squarefadein_0.4s_0.2s_ease-out_both]"
           style={{ left: 'calc(1 * 30px)', top: 'calc(1 * 30px)' }} id="square3" />
      <div className="absolute inline-block w-[26px] h-[26px] rounded-[2px] bg-primary animate-[square4_2.4s_0.2s_ease-in-out_infinite,squarefadein_0.4s_0.3s_ease-out_both]"
           style={{ left: 'calc(2 * 30px)', top: 'calc(1 * 30px)' }} id="square4" />
      <div className="absolute inline-block w-[26px] h-[26px] rounded-[2px] bg-primary animate-[square5_2.4s_0.2s_ease-in-out_infinite,squarefadein_0.4s_0.4s_ease-out_both]"
           style={{ left: 'calc(3 * 30px)', top: 'calc(1 * 30px)' }} id="square5" />
    </div>
  );
};