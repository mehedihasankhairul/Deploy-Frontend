import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../Components/Layout/MainLayout';

export default function Search() {
  const results = useSelector((state) => state.search);
  console.log(results, 'results');
  return (
    <MainLayout>
      <h2>Search results {results.length} </h2>
    </MainLayout>
  );
}
