import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

const Container = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #000000;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
    }
`;

const ToggleButton = styled.button`
    background-color: #268700;
    color: #000000;
    padding: 2rem 10rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;


    &:hover {
        background-color: #2f7300;
    }

    @media (max-width: 768px) {
        padding: 0.3rem 0.8rem;
    }

    @media (max-width: 480px) {
        padding: 0.2rem 0.6rem;
    }
`;

const TableContainer = styled.div`
    margin-top: 1rem;
    display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background-color: #313131;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }

    @media (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

const TableHeader = styled.th`
    padding: 1rem;
    background-color: #313131;
    color: #fff;
    border-bottom: 1px solid #313131;
    text-align: left;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.25rem;
    }
`;

const TableCell = styled.td`
    padding: 1rem;
    border-bottom: 1px solid #313131;
    text-align: left;
    background-color: #000000;

    @media (max-width: 768px) {
        padding: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.25rem;
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: -4px;
    &:last-child {
        margin-right: 4px;
    }
`;

const PairText = styled.span`
    margin-left: 12px;
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #333;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 768px) {
        padding: 0.3rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.2rem;
        margin-top: 0.3rem;
    }
`;

const FarmingInfo = () => {
    const [data, setData] = useState([]);
    const [isTableVisible, setIsTableVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('/api/farming-info');
                setData(result.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };
        fetchData();
    }, []);

    const columns = useMemo(() => [
        {
            Header: 'Pair',
            accessor: 'pair',
            Cell: ({ row }) => (
                <IconContainer>
                    {row.original.icons.map((icon, idx) => (
                        <Icon key={idx} src={icon} alt={`${row.original.pair} icon`} />
                    ))}
                    <PairText>{row.original.pair}</PairText>
                </IconContainer>
            ),
        },
        {
            Header: 'TVL',
            accessor: 'tvl',
        },
        {
            Header: 'Volume (24h)',
            accessor: 'volume',
        },
        {
            Header: 'Fees (24h)',
            accessor: 'fees',
        },
        {
            Header: 'APR',
            accessor: 'apr',
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: [
                    {
                        id: 'tvl',
                        desc: true,
                    },
                ],
            },
        },
        useGlobalFilter,
        useSortBy
    );

    return (
        <Container>

            <ToggleButton onClick={() => setIsTableVisible(!isTableVisible)}>
                {isTableVisible ? 'Таблица пулов ликвидности' : 'Таблица пулов ликвидности'}
            </ToggleButton>

            <TableContainer visible={isTableVisible}>
                <SearchInput
                    value={globalFilter || ''}
                    onChange={e => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
                <Table {...getTableProps()}>
                    <thead>
                    {headerGroups.map((headerGroup, i) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                            {headerGroup.headers.map((column, j) => (
                                <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())} key={j}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </TableHeader>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={i}>
                                {row.cells.map((cell, j) => (
                                    <TableCell {...cell.getCellProps()} key={j}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default FarmingInfo;
