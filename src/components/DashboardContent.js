import { useStyletron } from 'baseui';
import React from 'react';
import { Table } from "baseui/table-semantic";
import Filter from 'baseui/icon/filter'
import {
    LabelSmall,
    ParagraphMedium,
} from 'baseui/typography';

import { data, tableTitles } from '../assets/constant';

const DashboardContent = () => {
    const [css] = useStyletron();
    return <div className={css({
        width: '100%',
        borderRadius: '0.5rem',
        background: '#fff',
        border: "1px solid #DFE0EB",
        overflow: 'hidden',
        '@media (max-width: 768px)': {
            margin: '0 1.5rem'
        }
    })}>
        <div className={css({
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            
        })}>
            <LabelSmall>All Hotels</LabelSmall>
            <div className={css({
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
            })}>
                <ParagraphMedium className={css({
                    display: 'flex',
                    alignItems: 'center',
                })}><Filter size='2rem' className={css({
                    marginRight: '0.3rem',
                })} /><a href='http://localhost:3001/dashboard/hotels/addHotel'>Add Hotel</a></ParagraphMedium>
            </div>
        </div>
        <Table
            columns={tableTitles}
            data={data}
        />
    </div>;
};
export default DashboardContent;