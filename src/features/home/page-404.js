import React from "react";
import { Result, Button } from 'antd';
import { useHistory } from "react-router";


const Page404 = () => {
    const history = useHistory();

    return (<Result
        status="404"
        title="404"
        subTitle={
            <div>Sorry, the page <code>{history?.location?.pathname + history?.location?.search}</code> you visited does not exist.</div>
        }
        extra={<Button onClick={() =>history.push('/home') }type="primary">Back Home</Button>}
    />);
}

export default Page404;