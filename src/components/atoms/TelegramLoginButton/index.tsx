import * as React from 'react';

interface ITelegramLoginButtonProps {}

const TelegramLoginButton: React.FC<ITelegramLoginButtonProps> = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const script = document.createElement('script');
    (window as any).TelegramLoginWidget = {
      dataOnauth: (user: any) => console.log(user),
    };
    script.src = 'https://telegram.org/js/telegram-widget.js?' + 15;
    script.setAttribute('data-telegram-login', 'thuoc_si_bot');
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-userpic', 'write');
    script.setAttribute('data-auth-url', 'https://65c6-2405-4802-9173-1c20-2cf9-5f5a-47ff-c91f.ngrok.io');
    script.async = true;
    ref.current?.appendChild(script);
  }, []);

  return <div ref={ref} />;
};

export default TelegramLoginButton;
{
  /* <script
  async
  src="https://telegram.org/js/telegram-widget.js?15"
  data-telegram-login="thuoc_si_bot"
  data-size="small"
  data-auth-url="https://65c6-2405-4802-9173-1c20-2cf9-5f5a-47ff-c91f.ngrok.io"
  data-request-access="write"></script>; */
}
