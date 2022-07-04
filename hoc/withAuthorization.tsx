import { STORAGE_USER } from "constants/storage.constants";
import Router from "next/router";
import { getStorage } from "utils/storage.helper";


export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context: any) => {
    const userAuth = await getStorage(STORAGE_USER);

    if (userAuth === null) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: '/login',
        });
        context.res?.end();
      } else {
        Router.replace('/login');
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({...context, auth: userAuth});
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

