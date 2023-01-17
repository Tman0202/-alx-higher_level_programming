#!/usr/bin/python3

"""A script that:
- takes in a URL,
- sends a request to the URL and displays the value
- of the X-Request-Id field found in the header of the response.
"""
import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]

   # request = urllib.request.Request(url)
   # with urllib.request.urlopen(request) as response:
       # print(dict(response.headers).get("X-Request-Id"))

       # with urllib.request.urlopen(sys.argv[1]) as response:
#     headers = response.getheaders()
#     for header in headers:
#         if header[0] == "X-Request-Id":
#             print(header[1])


with urllib.request.urlopen(url) as response:
    header = response.info()
    request_id = header.get('X-Request-Id')
    print(request_id)
