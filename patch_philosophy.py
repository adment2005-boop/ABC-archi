import re

with open(r'E:\skill\abc-project\src\pages\HomePage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Use regex to find and replace the philosophy paragraph block
pattern = re.compile(
    r'(lg:col-span-9">)\s*<p className="text-2xl[^>]*text-balance">\s*ARCHITECTURE IS MEASURED SILENCE.*?</p>',
    re.DOTALL
)

replacement = (
    r'\1'
    '\n              <TextReveal\n'
    '                tag="p"\n'
    '                splitBy="words"\n'
    '                stagger={0.045}\n'
    '                start="top 82%"\n'
    '                end="bottom 25%"\n'
    '                scrub={1.5}\n'
    '                yOffset={36}\n'
    '                className="text-2xl sm:text-3xl md:text-[2.35rem] font-semibold uppercase leading-[1.35] tracking-[0.04em] text-white text-balance"\n'
    '              >\n'
    '                ARCHITECTURE IS MEASURED SILENCE \u2014 CARVED FROM CHARCOAL STONE, RAW CONCRETE, AND CALIBRATED DAYLIGHT \u2014 ANCHORED IN KHANDAGIRI\u2019S EARTH \u2014 REFINED BY ARCHITECTURAL BRASS AND PROPORTIONAL ORDER.\n'
    '              </TextReveal>'
)

new_content, count = re.subn(pattern, replacement, content, count=1)

if count:
    with open(r'E:\skill\abc-project\src\pages\HomePage.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'SUCCESS - made {count} replacement(s)')
else:
    idx = content.find('lg:col-span-9')
    print('Pattern not matched. Showing content:')
    print(repr(content[idx:idx+600]))
