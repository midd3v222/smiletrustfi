import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from '../../components/motion-primitives/image-comparison';

export default function BeforeAfterComparison({ 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt, 
  className = '' 
}) {
  return (
    <ImageComparison 
      className={`aspect-square w-full rounded-xl border border-gray-200/50 dark:border-gray-700/50 ${className}`}
      enableHover={true}
    >
      <ImageComparisonImage
        src={beforeImage}
        alt={beforeAlt}
        position="left"
      />
      <ImageComparisonImage
        src={afterImage}
        alt={afterAlt}
        position="right"
      />
      <ImageComparisonSlider className="w-2 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80">
        <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white shadow-lg" />
      </ImageComparisonSlider>
    </ImageComparison>
  );
}
