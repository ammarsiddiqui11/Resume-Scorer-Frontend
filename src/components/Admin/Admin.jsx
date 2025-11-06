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
            // please watch the video for full code
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
                    // Please Watch the video for full code
                    <div className={styles.AdminCard}>
                        <h2>CodingHunger</h2>
                        <p style={{ color: "blue" }}>mashhood@gmail.com</p>
                        <h3>Score: 50%</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cum ipsam q</p>
                    </div>
                }


            </div>
        </div>
    )
}

export default WithAuthHOC(Admin);