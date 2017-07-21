import os, sys

def main(argv):
    
    cmd = "tsc {0}.ts --outDir ./dist/"
    for i in compose_cmd(trim(argv), cmd):
        os.system(i)
    #print("typescript compilled... \n");
    for i in trim(argv):
        os.system('node ./dist/{0}'.format(i))
        
def trim(src):
    return list(map(lambda _str: _str[:len(_str)-3],src))
    
def compose_cmd(src, cmd):
    return list(map(lambda x: cmd.format(x), src))
    

#os.system('tsc ')
if __name__ == "__main__":
    main(sys.argv[1:])
    