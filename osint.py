import youtube_dl
from moviepy.editor import VideoFileClip, concatenate_videoclips
import os

def download_and_merge_videos(channel_url):
    def download_videos(channel_url):
        ydl_opts = {
            'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
            'outtmpl': 'downloads/%(title)s.%(ext)s',
            'ignoreerrors': True
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([channel_url])

    def merge_videos():
        videos_folder = 'downloads/'
        video_files = [file for file in os.listdir(videos_folder) if file.endswith(".mp4")]
        video_clips = [VideoFileClip(os.path.join(videos_folder, video)) for video in video_files]
        final_clip = concatenate_videoclips(video_clips)
        final_clip.write_videofile('merged_video.mp4')
        final_clip.close()
        for clip in video_clips:
            clip.close()

    download_videos(channel_url)
    merge_videos()

# Utilisation de la fonction en remplaçant channel_url par le lien de la chaîne YouTube souhaitée
channel_url = 'https://www.youtube.com/@lesengraineurs9388'
download_and_merge_videos(channel_url)
