"use client";

import React from 'react'
import dynamic from 'next/dynamic';

// const BoidSimulation = dynamic(() => import('@/components/BoidsSimulation'), {
//   ssr: false,
// });

import BoidsSimulation from "@/components/BoidsSimulation";

export default function Boids() {
  return (
    <div>Boids Example
        <div className='h-[80vh]'>
          <BoidsSimulation />
        </div>
    </div>
  )
}
