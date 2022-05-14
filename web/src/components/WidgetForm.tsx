import { useState } from "react";
import bugImageUrl from "../assets/bug.svg";
import ideaImageUrl from "../assets/idea.svg";
import thoughtImageUrl from "../assets/thought.svg";
import { CloseButton } from "./CloseButton";

const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um Inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma balão de pensamento",
    },
  },
};

type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedBackType] = useState<FeedbackType | null>(null);

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      <header>
        <span className='text-xl leading-6 '>Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedBackType ? (
        <div className='flex py-8 gap-2 w-full '>
          {Object.entries(feedBackTypes).map(([key, value]) => {
            return (
              <button
                className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
                type='button'
                onClick={() => setFeedBackType(key as FeedbackType)}
                key={key}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <p>Hello World</p>
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por{" "}
        <a
          className='underline underline-offset-2'
          href='https://github.com/icaroperetti'
        >
          Ícaro
        </a>
      </footer>
    </div>
  );
}
