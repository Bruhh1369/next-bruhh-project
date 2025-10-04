import Image from "next/image";

interface ImgProps {
    src: string;
    alt: string;
    fullSize?: boolean;
    imgWidth?: number;
    imgHeight?: number;
}

const Img = ({ src, alt, fullSize = false, imgWidth = 300, imgHeight = 300 }: ImgProps) => {
    const gif = typeof src === "string" && src.toLowerCase().endsWith(".gif");

    return (
        <div className="img" style={{position: "relative"}}>
            {fullSize ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    unoptimized={gif}
                    priority={gif}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={imgWidth}
                    height={imgHeight}
                    unoptimized={gif}
                    priority={gif}
                />
            )}
        </div>
    );
};

export default Img;
