import React, { useState, useEffect, useRef } from 'react';
import { ListDiv, MainBox, SearchDiv, SearchHeading } from '@/styles';
import useFetch from '@/hooks/useFetch';
import ListItems from './ListItems';
import RecordNotFound from '@/components/RecordNotFound';


export interface Item {
  title: string,
  document_type: [],
  abstract: [],
  authors: [],
  product_name: [],
  urls: [],
  date: string,
  rid: string,
}

export const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const [searchVal, setSearchVal] = useState<string>('');
  const [debouncedInputValue, setDebouncedInputValue] = React.useState('');

  const { data, loading, error } = useFetch(page, debouncedInputValue);
console.log(loading);

  const changePosition = () => {
    if (scrollRef.current) {
      const isScrolledToBottom =
        scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight - 1;
      if (isScrolledToBottom) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', changePosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', changePosition);
      }
    };
  }, []);
  React.useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(searchVal);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchVal]);

  return (
    <SearchDiv>
      <SearchHeading>Search on your finger tips</SearchHeading>
      <MainBox
        id='standard-helperText'
        label=''
        defaultValue=''
        helperText='Please Search Something ...'
        variant='standard'
        onChange={(e) => setSearchVal(e.target.value)}
        focused
      />
      <ListDiv ref={scrollRef}>
        {searchVal ? !loading ? data.length ? data?.map((item: Item, i: number) => <ListItems key={i} data={item} />) : <RecordNotFound message='Record not Found' /> : <RecordNotFound message='Loading.....' /> : null}
      </ListDiv>
    </SearchDiv>
  );
};
