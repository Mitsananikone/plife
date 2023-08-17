import UniqueSlick from '@/components/uniqueSlick/uniqueSlick';


export default function LandingPage() {
    return (
      <div
        style={{
          backgroundImage: "url('/images/home-sideface.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set a minimum height
          minWidth: '100vw',
          marginTop: '-70px',
          zIndex: -99,
          overflow: 'visible',
        }}
        className="background"
      >
        <div>
       <UniqueSlick/>
       </div>
      </div>
    );
  }
  