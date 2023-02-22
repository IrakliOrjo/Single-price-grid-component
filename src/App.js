
import './index.css';
import MobileBg from './images/bg-main-mobile.png'
import CardBack from './images/bg-card-back.png'
import CardFront from './images/bg-card-front.png'

function App() {
  return (
    <div className="App">
      <div className='flex flex-col p-[3rem] 
      sm:grid sm:grid-cols-2 md:grid md:grid-cols-2
      sm:max-w-[50rem] sm:mx-auto sm:pt-[8rem]
      '>
       <div className='bg-white rounded-t-md py-6 
       shadow-md px-5  sm:col-span-full md:col-span-full
       sm:p-9
       '>
        <p className='text-[#31b4b1] mb-4 font-bold 
        text-[1rem] md:text-[1.1rem]'>Join our community</p>
        <p className='text-[#a0ba2b] mb-4 text-[0.90rem] md:text-[1rem]
        font-semibold'>30-day, hassle-free money back guarantee</p>
        <p className='text-[0.75rem] lg:max-w-[35rem] md:text-[1rem] text-[#a1a3a4]'>Gain access to our full library of tutorials along with expert code reviews. 
  Perfect for any developers who are serious about honing their skills.</p>
       </div>
       <div className='bg-[#2AB2AF]
        flex flex-col justify-center sm:rounded-bl-md
        items-center py-4 px-5'>
        <p className='text-[white] sm:pl-6 self-start mb-4 font-[500] text-[1rem]'>Monthly Subscription</p>
        <p className='text-[0.75rem] sm:pl-6 self-start text-[#cecfd0]'><span className='text-[white] mr-2 font-[500] text-[2rem]'>$29</span> per month</p>
        <p className='text-[0.80rem] sm:pl-6 self-start text-[white]'>Full access for less than $1 a day</p>
        <button className='mx-auto mt-[1.5rem] shadow-md
         bg-[#98d514] font-[600] text-[0.90rem]
          text-[white] w-[14.5rem] h-[2.5rem] rounded-[5px]
         text-center'
        >Sign Up</button>
       </div>
       <div className='bg-[#30ccc9] sm:rounded-bl-none md:p-8 rounded-b-md  py-4 px-5'>
        <p className='text-[white] mb-4 font-[500] text-[1rem]'>Why Us</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Tutorials by industry experts</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Peer &amp; expert code review</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Coding exercises</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Access to our GitHub repos</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Community forum</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>Flashcard decks</p>
        <p className='text-[0.80rem] text-[#e9e8e8]'>New videos every week</p>
       </div>
       </div>
        </div>
        
    
  );
}

export default App;
