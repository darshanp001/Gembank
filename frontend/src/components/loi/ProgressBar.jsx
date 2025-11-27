export const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full bg-gembank-gray-200 rounded-full h-2 mb-8">
      <div
        className="bg-gradient-to-r from-gembank-gold to-gembank-gold-dark h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default {ProgressBar};