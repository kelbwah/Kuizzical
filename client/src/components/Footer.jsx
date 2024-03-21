import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { Footer as FlowbiteFooter } from 'flowbite-react';

const iconStyles =
    'lg:h-7 md:h-7 h-7 lg:w-7 md:w-7 w-6 text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300';
const textStyles =
    'hover:text-gray-50 active:text-gray-300 ease-in-out duration-300 select-none font-bold';

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-full lg:w-[1024px] flex items-center justify-between py-6 lg:px-12 md:px-12 px-8 text-gray-400'>
            <FlowbiteFooter.Copyright
                className={textStyles}
                by='kuizzical™'
                year={new Date().getFullYear()}
            />
            <FlowbiteFooter.LinkGroup className='items-center'>
                <FlowbiteFooter.Link
                    href='https://www.github.com/kelbwah'
                    target='_blank'
                    title='Github'
                >
                    <FaGithub className={iconStyles} />
                </FlowbiteFooter.Link>
                <FlowbiteFooter.Link
                    href='https://www.linkedin.com/in/kelby-amandy-ba818a214/'
                    target='_blank'
                    title='LinkedIn'
                >
                    <FaLinkedin className={iconStyles} />
                </FlowbiteFooter.Link>
                <p className={textStyles}>@kaffy</p>
            </FlowbiteFooter.LinkGroup>
        </footer>
    );
};

export default Footer;
