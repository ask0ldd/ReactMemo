import { useEffect, useState } from 'react';
import { CompaniesService } from './service/CompaniesService';

export interface Company {
    id: string;
    name: string;
}

function CompanyList() {
    const [data, setData] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        CompaniesService.getAll()
            .then(companies => {
                setData(companies)
            })
            .catch(err => {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data.map(company => (
                <li key={company.id}>{company.name}</li>
            ))}
        </ul>
    );
}

export default CompanyList;