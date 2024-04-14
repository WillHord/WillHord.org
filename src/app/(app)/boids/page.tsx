"use client";

import React from 'react'
import dynamic from 'next/dynamic';

const BoidSimulation = dynamic(() => import('@/components/BoidsSimulation'), {
  ssr: false,
});

export default function Boids() {
  return (
    <div>Boids Example
        <div>
            <BoidSimulation />
        </div>
    </div>
  )
}
