
'''
In order to use the moviepy library, several dependencies need to be installed.

-numpy
-decorator
-tqdm
-Pillow
-ffmpeg
'''

import os
import sys
from moviepy.editor import *

def main(argv):
    #Get args
    input_file_name = "./" + str(argv[1])
    output_file_name = str(argv[2])
    start_min = int(argv[3])
    start_sec = int(argv[4])
    end_min = int(argv[5])
    end_sec = int(argv[6])

    #generate video object
    v = VideoFileClip(input_file_name)

    #get specified clip
    cl = v.subclip((start_min,start_sec),(end_min,end_sec))

    #resize clip to 30% original size and speed it up a little bit
    sm_cl = cl.resize(0.3).fx(vfx.speedx, 1.3)

    #create and write gif
    sm_cl.to_gif(output_file_name)
    return 1

if __name__ == "__main__":
    main(sys.argv)