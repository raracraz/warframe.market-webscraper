import { Grid } from 'gridjs-react';

export default function tableCreate(props) {
    const row = props.row;
    const [data, setData] = useState([]);
    setData(data.slice(0).concat([row()]));

    return (
        <div>
            <Grid
                data={data}
                columns={['Name', 'Email']}
                pagination={{
                    limit: 5,
                }}
            />
        </div>
    );
}