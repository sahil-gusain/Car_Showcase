import { Hero } from '@/components'
import {SearchBar,ShowMore} from '@/components';
import {CustomFilter} from '@/components';
import { fetchCars } from '@/utils';
import {CarCard} from '@/components';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import { manufacturers } from '@/constants';
import { fuels,yearsOfProduction } from '@/constants';

export default async function Home({searchParams}:any) {

  const allCars = await fetchCars({
    manufacturer:searchParams.manufacturer || "toyota",
    year:searchParams.year || 2023,
    limit:searchParams.limit || 6,
    model:searchParams.model || "corolla",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <>
     <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
               pageNumber={(searchParams.limit || 6)/6}
               isNext = {(searchParams.limit || 6)>allCars.length}/>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
    </>
  )
}
