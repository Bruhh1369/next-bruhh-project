import Image from "next/image";

interface ImgProps {
    src: string;
    alt: string;
    fullSize?: boolean;
    imgWidth?: number;
    imgHeigth?: number;
}

const Img = ({ src, alt, fullSize = false, imgWidth = 300, imgHeigth = 300 }: ImgProps) => {
    return (
        <div className="img">
            {fullSize ? <Image
                src={src}
                alt={alt}
                fill
            /> :
                <Image
                    src={src}
                    alt={alt}
                    width={imgWidth}
                    height={imgHeigth}
                />}
        </div>
    )
}

export default Img