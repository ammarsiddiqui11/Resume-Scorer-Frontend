import React, { useState, useEffect } from 'react'
import styles from './Admin.module.css';
import { Skeleton } from '@mui/material';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios';


const Admin = () => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        const fetchAllData = async () => {
            setLoader(true)
            try {
                const result = await axios.get('/api/resume/get')
                console.log(result.data)
                setData(result?.data?.resumes)
            } catch (error) {
                console.log(error)
                alert('something went wrong')
            }finally{
                setLoader(false)
            }
        }

        fetchAllData()
    }, [])

    return (
        <div className={styles.Admin}>
            <div className={styles.AdminBlock}>

                {
                    loader && <>
                        <Skeleton
                            variant="rectangular"
                            width={266}
                            height={400}
                            sx={{ borderRadius: "20px" }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={266}
                            height={400}
                            sx={{ borderRadius: "20px" }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={266}
                            height={400}
                            sx={{ borderRadius: "20px" }}
                        />
                    </>
                }

                {
                    data.map((item,index) =>{
                        <div key={item?._id || index} className={styles.AdminCard}>
                        <h2>{item?.user.name}</h2>
                        <p style={{ color: "blue" }}>{item?.user?.email}</p>
                        <h3>Score: {item?.score}%</h3>
                        <p>{item?.feedback}</p>
                    </div>
                    })
                }


            </div>
        </div>
    )
}

export default WithAuthHOC(Admin);