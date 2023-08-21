import UniqueSlick from '@/components/uniqueSlick/uniqueSlick';


export default function LandingPage() {
    return (
      <div
        style={{
          backgroundImage: "url('/images/home-sideface.png')",
        }}
        className="background"
      >
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', marginTop: '25%' }}>
       <UniqueSlick/>
       </div>
      </div>
    );
  }
  