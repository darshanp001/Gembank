export const FormStepper = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-8 overflow-x-auto pb-4">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex items-center flex-shrink-0">
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300
                  ${isCompleted ? 'bg-gembank-green text-white' : ''}
                  ${isActive ? 'bg-gembank-gold text-gembank-charcoal scale-110 shadow-gold' : ''}
                  ${!isActive && !isCompleted ? 'bg-gembank-gray-300 text-gembank-gray-800' : ''}
                `}
              >
                {isCompleted ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.icon
                )}
              </div>
              <div
                className={`
                  mt-2 text-xs font-medium text-center whitespace-nowrap
                  ${isActive ? 'text-gembank-gold' : 'text-gembank-gray-800'}
                `}
              >
                {step.title}
              </div>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`
                  w-16 h-0.5 mx-2 transition-all duration-300
                  ${isCompleted ? 'bg-gembank-green' : 'bg-gembank-gray-300'}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default {FormStepper};