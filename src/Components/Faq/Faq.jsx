import React from "react";
import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="bg-white dark:bg-black mt-20">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>What is InvestoHub?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              InvestoHub is an online platform that offers comprehensive courses on
              stock market trading and investment strategies. Designed to cater to beginners 
              and experienced traders alike, it provides a user-friendly interface.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Do I need prior knowledge of the stock market to start?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              No, you don't need any prior knowledge to begin. InvestoHub offers 
              beginner-friendly courses that cover the basics of the stock market, 
              including terminologies, concepts, and strategies. 
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          What topics are covered in the courses?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our courses cover a wide range of topics, including stock market basics,
              technical analysis, fundamental analysis, options trading, portfolio management,
              and more. Each course is tailored to specific skill levels, ensuring relevant 
              and valuable learning.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
