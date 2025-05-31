import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-primary-foreground">
        Welcome to My Portfolio!
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Discover my work, experience, and skills in software development and quality assurance.
      </p>
      {/* You can add more content here, like a call to action button */}
    </div>
  );
};

export default LandingPage; 