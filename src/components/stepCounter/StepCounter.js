import React from 'react'

const StepCounter = ({formSteps}) => {
  
  const totalSteps = Array.from({length: formSteps.totalSteps}, (e, index) => index + 1 )
  
  return (
    <div className="steps-horizontal w-full mt-10">
      <ul className="steps">
        {
          totalSteps.map((item, index) => (
            <li 
              key={`step-${index}`} 
              className={formSteps.step === item ? 'step step-accent after:text-white' : 'step step-primary' }
              data-content={item < formSteps.step  ? '✓' : item}>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { StepCounter };