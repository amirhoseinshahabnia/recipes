'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Card from './components/card';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  if (error) return <div>Failed to load</div>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setData(null);
    e.preventDefault();
    setIsLoading(true);
    fetch(`/api/recipes?query=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <h1 className="text-4xl mb-4">Recipe App</h1>
      <p className="mb-6">Search for a recipe here</p>
      <form
        className="mb-8 max-w-lg flex gap-x-2 justify-center px-4 md:px-0 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Input a recipe name here"
          value={searchTerm}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg border-lime-300 bg-black grow max-w-md"
        />
        <button className="py-2 px-4 rounded-lg bg-lime-300" type="submit">
          Search!
        </button>
      </form>
      {isLoading ? <div>Loading ...</div> : null}
      {!data ? null : data.data.results.length === 0 ? (
        <div>No result could be found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:max-w-7xl">
          {data.data.results.map((item: any, i: number) => (
            <Card key={i} title={item.title} src={item.image} />
          ))}
        </div>
      )}
    </section>
  );
}
