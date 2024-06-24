import React, { useState } from 'react';

const FilterComponent = ({ onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">所有区域</option>
      <option value="pudong">浦东</option>
      <option value="jingan">静安</option>
      // 更多区域选项
    </select>
  );
};