type ImageProps = {
  image: string,
};

function Logo({ image }: ImageProps) {
  return (
    <img src={ image } alt="logo" className="w-32 h-32 m-4" />
  );
}

export default Logo;
