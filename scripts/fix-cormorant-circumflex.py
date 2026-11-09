# Cormorant Garamond (fontsource 5.3) draws â ê î ô û with a tall, off-centre circumflex. This rebuilds those
# glyphs from the base letter + a wider, lower circumflex. Usage: python3 scripts/fix-cormorant-circumflex.py in.woff out.woff
import sys
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
src,dst=sys.argv[1],sys.argv[2]
f=TTFont(src);gs=f.getGlyphSet();glyf=f['glyf']
def bounds(n):
    bp=BoundsPen(gs);gs[n].draw(bp);return bp.bounds
cx0,cy0,cx1,cy1=bounds('circumflex')
pairs={'acircumflex':'a','ecircumflex':'e','ocircumflex':'o','ucircumflex':'u','icircumflex':'dotlessi'}
for comp,base in pairs.items():
    if comp not in glyf or base not in gs: continue
    bx0,by0,bx1,by1=bounds(base)
    # use the original accent's horizontal centre in the composed glyph as reference for italics
    ox0,oy0,ox1,oy1=bounds(comp)
    sx,sy=1.75,0.6
    w=(cx1-cx0)*sx;h=(cy1-cy0)*sy
    centre=(bx0+bx1)/2
    if 'italic' in src.lower() or f['post'].italicAngle!=0: centre+=35
    bottom=by1+75
    pen=TTGlyphPen(gs)
    gs[base].draw(pen)
    t=TransformPen(pen,(sx,0,0,sy,centre-w/2-cx0*sx,bottom-cy0*sy))
    gs['circumflex'].draw(t)
    glyf[comp]=pen.glyph()
f.save(dst)
