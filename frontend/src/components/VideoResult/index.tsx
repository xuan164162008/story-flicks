import { useVideoStore } from "../../stores/index";
import styles from './index.module.css'
export default function VideoResult(props: any) {

    const { videoUrl } = useVideoStore();

    if (!videoUrl) {
        return null;
    }
    return (
        <div className={styles.videoContainer}>
            <video controls className={styles.videoEl}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}