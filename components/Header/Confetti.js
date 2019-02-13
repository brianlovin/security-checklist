// @flow
 
// The code in this component was based on Yoav Kadosh’s React Confetti
// on Codepen : // https://codepen.io/ykadosh/pen/aaoZRB
// distributed under the following license:
// 
// Copyright (c) 2019 by Yoav Kadosh (https://codepen.io/ykadosh/pen/aaoZRB)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

import React, { useState, useRef, useEffect, Fragment } from 'react';
import { ParticleZone } from './style';

type ConfettiProps = {
  fireConfetti: boolean,
};
type ParticlesProps = {
  count: number,
};
type Props = {};


const COLORS = ['#2ecc71','#3498db','#e67e22','#e67e22','#e74c3c'];
const TOP_OFFSET = typeof window != 'undefined' ? window.innerHeight : 0;
const INNER_WIDTH = typeof window != 'undefined' ? window.innerWidth : 0;
const LEFT_OFFSET = 250;

const generateWholeNumber = (min, max) => min + Math.floor(Math.random()*(max - min));

const generateRandomColor = () => COLORS[generateWholeNumber(0,COLORS.length)];

export function CircularParticle(props: Props) {
  const currentCircularConfetti = useRef(null);

  const SIZE_RANGE = [5, 10];
  const ROTATION_RANGE = [0, 45];

  const size = generateWholeNumber(...SIZE_RANGE);
  const style = {
    backgroundColor: generateRandomColor(),
    width: size,
    height: size,
    borderRadius: size,
    transform: `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`,
    left: generateWholeNumber(0, INNER_WIDTH),
    top: generateWholeNumber(-TOP_OFFSET, 0)
  };

  useEffect(() => {
    const {left} = style;
    setTimeout(() => {
      const node = currentCircularConfetti.current;
      if (node) {
        node.style.top = window.innerHeight + generateWholeNumber(0, window.innerHeight) + 'px';
        node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
      }
    },10);
   }); 
    
  return (
    <div ref={currentCircularConfetti} className='particle' style={style}/>
  );
}

function SquiggleParticle(props: Props) {
  const currentSquiggleConfetti = useRef(null);  
  const SIZE_RANGE = [15, 45];
  const ROTATION_RANGE = [-15, 15];

  const size = generateWholeNumber(...SIZE_RANGE);
  const style = {
    fill: generateRandomColor(),
    width: size,
    height: size,
    transform: `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`,
    left: generateWholeNumber(0, INNER_WIDTH),
    top: generateWholeNumber(-TOP_OFFSET, 0)
  };


  useEffect(() => {
    const {left} = style;
    setTimeout(() => {
      const node = currentSquiggleConfetti.current;
      if (node){    
        node.style.top = window.innerHeight + generateWholeNumber(0, window.innerHeight) + 'px';
        node.style.left = left + generateWholeNumber(-LEFT_OFFSET, LEFT_OFFSET) + 'px';
        node.style.transform = `rotateZ(${generateWholeNumber(...ROTATION_RANGE)}deg)`;
      }
    },10);
  });

  return (
    <div ref={currentSquiggleConfetti} style={style}>
      <svg
        width={style.width}
        height={style.height}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512">
        <path fill={style.fill} d="M428.127,0l-12.716,10.062l12.718-10.06c8.785,11.101,19.716,24.917,19.716,51.051 s-10.932,39.951-19.716,51.053c-7.382,9.331-12.716,16.072-12.716,30.927c0,14.854,5.334,21.594,12.716,30.925   c8.784,11.101,19.716,24.917,19.716,51.05c0,26.135-10.931,39.949-19.715,51.051c-7.383,9.331-12.717,16.072-12.717,30.927   c0,14.855,5.332,21.593,12.711,30.919l-25.435,20.124c-8.781-11.097-19.708-24.909-19.708-51.042 c0-26.135,10.931-39.949,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.927c0-14.855-5.335-21.595-12.717-30.926 c-8.784-11.101-19.715-24.916-19.715-51.049s10.931-39.95,19.715-51.051c7.383-9.331,12.717-16.072,12.717-30.928 c0-14.855-5.335-21.596-12.718-30.927L428.127,0z"/>
      </svg>
    </div>
  );
}

export function Particles(props: ParticlesProps) {
  let {count: n} = props;
  const particles = [];
  const types = [SquiggleParticle, CircularParticle, CircularParticle];
  
  while(n--) {
    const Particle = types[generateWholeNumber(0,3)];
    particles.push(
      <Particle key={n}/>
    );
  }
  
  return (
    <ParticleZone className='particles'>
      {particles}
    </ParticleZone>
  );
}


export default function Confetti(props: ConfettiProps) {
  const [particles, setParticles] = useState([]);

  var id = 1;

  function clean(id) {
    setParticles(particles.filter(_id => _id !== id))
  }
  
  useEffect(() => {
    if (props.fireConfetti) {
        id = id;
        id++;
        
        setParticles([...particles, id])
    
        setTimeout(() => {
          clean(id);
        }, 5000);
      }
    },
    [props.fireConfetti]
  );

  return (
    <Fragment>
       {props.fireConfetti && particles.map(id => (
         <Particles key={id} count={Math.floor(INNER_WIDTH / 20)}/>
       ))}
    </Fragment>
  );
}
