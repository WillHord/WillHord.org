import aiohttp
import asyncio
import pysmartthings
import sys

token = 'fe408548-45ec-4680-9c99-243364e6d03e'


async def lightsOn():
    async with aiohttp.ClientSession() as session:
        api = pysmartthings.SmartThings(session, token)

        locations = await api.locations()
        scenes = await api.scenes()

        result = await scenes[0].execute()
        assert result == True

async def lightsOff():
    async with aiohttp.ClientSession() as session:
        api = pysmartthings.SmartThings(session, token)

        locations = await api.locations()
        scenes = await api.scenes()

        result = await scenes[1].execute()
        assert result == True

if __name__ == "__main__":
    if sys.argv[1] == 'True':
        asyncio.run(lightsOn())
    else:
        asyncio.run(lightsOff())
