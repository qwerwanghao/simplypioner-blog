import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number; // 0-10
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  // 将0-10的水平转换为百分比
  const percentage = (level / 10) * 100;
  
  // 根据水平生成填充的方块数量
  const filledBlocks = Array(level).fill('█').join('');
  // 根据剩余空间生成空方块数量
  const emptyBlocks = Array(10 - level).fill('░').join('');

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400 font-mono">{filledBlocks}{emptyBlocks}</span>
      </div>
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar; 