import { useState, useRef, useEffect } from "react";
import "./chat.scss";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import botProfile from "~/assets/images/botProfile.png";
import { useSendMessage } from "~/services/messages";
import { messageType } from "~/utils/types";

const Chat = () => {
  const messagesScreenRef = useRef<HTMLDivElement>(null);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: sendMessage, isLoading: sendMessageLoading } =
    useSendMessage();
  const [fakeBotResponseLoading, setFakeBotResponseLoading] =
    useState<boolean>(false);
  const [messagesList, setMessagesList] = useState<Array<messageType>>([]);

  const sendMessageHandler = handleSubmit((data: any) => {
    sendMessage(data.message, {
      onSuccess: ({ data }, message) => {
        if (data.status) {
          resetField("message");
          const myNewMessage: messageType = {
            id: messagesList.length,
            text: message,
            isMine: true,
          };
          const botNewMessage: messageType = {
            id: messagesList.length + 1,
            text: data.message,
            isMine: false,
          };
          setMessagesList((prevList) => [...prevList, myNewMessage]);
          setFakeBotResponseLoading(true);
          setTimeout(() => {
            setFakeBotResponseLoading(false);
            setMessagesList((prevList) => [...prevList, botNewMessage]);
          }, 2000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: data.message,
          });
        }
      },
    });
  });
  useEffect(() => {
    messagesScreenRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [messagesList]);

  return (
    <div className="Home_wrapper set_col_middle">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justif h-screen py-5">
            {messagesList.length === 0 ? (
              <div className="set_row_middle w-full p-6 flex-1">
                <div className="bg-gray-50 rounded-full text-sm px-5 py-2">
                  No messages here yet...
                </div>
              </div>
            ) : (
              <div className="messages_screen scroll_styles">
                <ul>
                  {messagesList.map((message) => {
                    if (message.isMine) {
                      return (
                        <li className="my_message" key={message.id}>
                          <div className="inner_message">{message.text}</div>
                        </li>
                      );
                    }
                    return (
                      <li className="bot_message" key={message.id}>
                        <div className="avatar">
                          <img src={botProfile} alt="Bot" />
                        </div>
                        <div className="inner_message">{message.text}</div>
                      </li>
                    );
                  })}
                  {fakeBotResponseLoading && (
                    <li className="bot_message">
                      <div className="avatar">
                        <img src={botProfile} alt="Bot" />
                      </div>
                      <div className="inner_message set_row_middle">
                        <div className="scaling-dots">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
                <div ref={messagesScreenRef} className="h-6 w-full" />
              </div>
            )}
            <div className="chat_box">
              <input
                type="text"
                placeholder="Message"
                {...register("message", { required: true })}
                onKeyDown={(e) => {
                  if (e.code === "Enter" || e.code === "NumpadEnter") {
                    sendMessageHandler();
                  }
                }}
              />
              <button onClick={sendMessageHandler}>
                {sendMessageLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g transform="translate(80,50)">
                      <g transform="rotate(0)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="1"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.875s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.875s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(71.21320343559643,71.21320343559643)">
                      <g transform="rotate(45)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.875"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.75s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.75s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(50,80)">
                      <g transform="rotate(90)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.75"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.625s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.625s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(28.786796564403577,71.21320343559643)">
                      <g transform="rotate(135)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.625"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.5s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.5s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(20,50.00000000000001)">
                      <g transform="rotate(180)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.5"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.375s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.375s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(28.78679656440357,28.786796564403577)">
                      <g transform="rotate(225)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.375"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.25s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.25s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(49.99999999999999,20)">
                      <g transform="rotate(270)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.25"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="-0.125s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="-0.125s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                    <g transform="translate(71.21320343559643,28.78679656440357)">
                      <g transform="rotate(315)">
                        <circle
                          cx="0"
                          cy="0"
                          r="6"
                          fill="#5865f2"
                          fillOpacity="0.125"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="scale"
                            begin="0s"
                            values="1.5 1.5;1 1"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                          ></animateTransform>
                          <animate
                            attributeName="fillOpacity"
                            keyTimes="0;1"
                            dur="1s"
                            repeatCount="indefinite"
                            values="1;0"
                            begin="0s"
                          ></animate>
                        </circle>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
