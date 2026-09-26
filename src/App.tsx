export default function App() {
  return (
    <main
      id="main-container"
      className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden"
    >
      {/* 
        User-uploaded exact image file used directly: backgrond.jpg.jpeg
      */}
      <div
        id="background-image"
        className="w-full h-full"
        style={{
          backgroundImage: 'url("/backgrond.jpg.jpeg")',
          backgroundRepeat: 'repeat',
          backgroundSize: '366px 178px',
          backgroundPosition: 'top left',
        }}
      />
    </main>
  );
}
