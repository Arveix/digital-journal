import placeholderImg from '../assets/placeholderImg.jpg'
import Clock from "../components/Clock";


function BlogLink({ title, date }: { title: string, date: string }) {
    return (
        <a href="#" className="flex gap-x-2 relative items-center text-base cursor-pointer group">
            <span
                className="
          text-lg
          absolute
          -left-1
          opacity-0
          transition-all
          duration-200
          group-hover:opacity-100
          text-accent
        "
            >
                &gt;
            </span>
            <div className='transition-transform duration-200 group-hover:translate-x-4'>
                <div className='text-xs text-zinc-400'>{date}</div>
                <div>{title}</div>
            </div>
        </a>
    )
}

export default function Home() {
    return(
        <div className="min-h-screen flex justify-center py-10 px-2">

            <div className="flex flex-col gap-y-7 max-w-[500px] mx-10">
                <div className="flex gap-x-2">
                    <img src={placeholderImg} className="max-w-[150px] p-[10px] border border-primary" />

                    <div className="flex flex-col self-end gap-y-1 align-text-bottom">
                        <Clock />
                        <h2 className="text-4xl font-semibold uppercase tracking-wider leading-none translate-y-[9px]"> arveix's <br /> digital journal </h2>
                    </div>
                </div>

                <hr />

                <div className="flex flex-col items-start gap-y-7 mt-3 font-mono">
                    <BlogLink title='How does QR Code work?' date='25.06.2026' />
                    <BlogLink title='List of some really cool looking birds' date='01.07.2026' />
                    <BlogLink title='Invention of digital emoticons' date='13.07.2026' />
                    <BlogLink title="A beginner's guide on how to pick locks" date='22.07.2026' />
                    <BlogLink title='Etymology for STEM students' date='22.07.2026' />
                    <BlogLink title='Numeral systems' date='22.07.2026' />
                    <BlogLink title='How our eyes detect colour' date='22.07.2026' />
                    <BlogLink title='Classification of humor' date='22.07.2026' />
                    <BlogLink title='An interesting verification method used to exchange cash An interesting verification method used to exchange cash' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                    <BlogLink title='List of some really cool looking birds' date='22.07.2026' />
                </div>
            </div>

            <script src="script.js"></script>

        </div>
    )
}