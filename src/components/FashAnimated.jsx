import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, Diamond, Watch, Shirt, Sparkles } from 'lucide-react'
import CategorySection from './CategorySection'
import AnimatedBackground from './AnimatedBackground'

const FashAnimated = () => {
  const data = [
    {
      title: "Resellers",
      icon: Package,
      items: [
        { name: "Beymen", url: "beymen.com" },
        { name: "Vakko", url: "vakko.com" },
        { name: "1290sqm", url: "1290sqm.com" },
        { name: "Shopi go", url: "shopigo.com" },
        { name: "Wunder", url: "wunder.com.tr" },
        { name: "Vitruta", url: "vitruta.com" }
      ]
    },
    {
      title: "Luxury Resellers",
      icon: Diamond,
      items: [
        { name: "Fashionphile", url: "fashionphile.com" },
        { name: "Rebag", url: "rebag.com" },
        { name: "Hardly Ever Worn It", url: "hardlyeverwornit.com" },
        { name: "The RealReal", url: "therealreal.com" },
        { name: "Collector Square", url: "collectorsquare.com" },
        { name: "Lampoo", url: "lampoo.com" },
        { name: "Luxclusif", url: "luxclusif.com" },
        { name: "1stDibs", url: "1stdibs.com" },
        { name: "Luxury Garage Sale", url: "luxurygaragesale.com" },
        { name: "Shengli Road Market", url: "shengliroadmarket.com" },
        { name: "StockX", url: "stockx.com" },
        { name: "Farfetch", url: "farfetch.com" },
        { name: "Sutore", url: "sutore.com" }
      ]
    },
    {
      title: "Watches",
      icon: Watch,
      items: [
        { name: "Richard Mille", url: "richardmille.com" },
        { name: "A. Lange & Söhne", url: "alange-soehne.com" },
        { name: "Vacheron Constantin", url: "vacheron-constantin.com" },
        { name: "Hublot", url: "hublot.com" },
        { name: "Audemars Piguet", url: "audemarspiguet.com" },
        { name: "Patek Philippe", url: "patek.com" },
        { name: "Seiko", url: "seikowatches.com" },
        { name: "Cartier", url: "cartier.com" },
        { name: "Swatch", url: "swatch.com" },
        { name: "Omega", url: "omegawatches.com" },
        { name: "Rolex", url: "rolex.com" },
        { name: "Chrono24 TR", url: "chrono24.com.tr" },
        { name: "Franck Muller", url: "franckmuller.com" },
        { name: "Emre Leather Works", url: "emreleatherworks.com" }
      ]
    },
    {
      title: "Streetwear / Contemporary",
      icon: Shirt,
      items: [
        { name: "Supreme (US)", url: "us.supreme.com" },
        { name: "Supreme (EU)", url: "eu.supreme.com" },
        { name: "Off-White", url: "off---white.com" },
        { name: "Palace", url: "palaceskateboards.com" },
        { name: "BAPE / A Bathing Ape", url: "bape.com" },
        { name: "BAPE (INT)", url: "int.bape.com" },
        { name: "Kith", url: "kith.com" },
        { name: "Stüssy", url: "stussy.com" },
        { name: "CLOT / JUICE", url: "juicestore.com" },
        { name: "BEAMS", url: "beams.co.jp" },
        { name: "Noah", url: "noahny.com" },
        { name: "Patta (NL)", url: "patta.nl" },
        { name: "Patta (US)", url: "pattaclothing.us" },
        { name: "Diesel", url: "diesel.com" },
        { name: "Les Benjamins", url: "lesbenjamins.com" },
        { name: "Drew House", url: "thehouseofdrew.com" },
        { name: "Eytys", url: "eytys.com" },
        { name: "Études", url: "etudes-studio.com" },
        { name: "ADER error", url: "adererror.com" },
        { name: "Hypebeast", url: "hypebeast.com" },
        { name: "Highsnobiety", url: "highsnobiety.com" },
        { name: "Aimé Leon Dore", url: "aimeleondore.com" },
        { name: "Brain Dead", url: "wearebraindead.com" },
        { name: "Dover Street Market", url: "doverstreetmarket.com" },
        { name: "Golf Wang", url: "golfwang.com" },
        { name: "Carhartt WIP", url: "carhartt-wip.com" },
        { name: "Acne Studios", url: "acnestudios.com" },
        { name: "Vetements", url: "vetementswebsite.com" }
      ]
    },
    {
      title: "Brands (TR/EU)",
      icon: Shirt,
      items: [
        { name: "Converse TR", url: "converse.com.tr" },
        { name: "Kaotiko BCN", url: "kaotikobcn.eu" },
        { name: "Carhartt WIP", url: "carhartt-wip.com" },
        { name: "Stüssy", url: "stussy.com" },
        { name: "Freedom of Space", url: "freedomofspace.co" },
        { name: "Vans TR", url: "vans.com.tr" },
        { name: "The North Face TR", url: "thenorthface.com.tr" },
        { name: "Supreme", url: "supreme.com" },
        { name: "Golf Wang", url: "golfwang.com" },
        { name: "BAPE", url: "bape.com" },
        { name: "BAPE (INT)", url: "int.bape.com" },
        { name: "Ohmsole", url: "ohmsole.com" },
        { name: "Fashfed", url: "fashfed.com" },
        { name: "Superstep TR", url: "superstep.com.tr" },
        { name: "Meezy Archive", url: "meezyarchive.com" },
        { name: "House of Superstep", url: "houseofsuperstep.com" },
        { name: "HOS (store)", url: "hos.houseofsuperstep.com" }
      ]
    },
    {
      title: "Luxury Brands",
      icon: Diamond,
      items: [
        { name: "Prada", url: "prada.com" },
        { name: "Balenciaga", url: "balenciaga.com" },
        { name: "Burberry TR", url: "tr.burberry.com" },
        { name: "Gucci", url: "gucci.com" },
        { name: "Bottega Veneta", url: "bottegaveneta.com" },
        { name: "Louis Vuitton (EU)", url: "eu.louisvuitton.com" },
        { name: "Saint Laurent (YSL)", url: "ysl.com" },
        { name: "Golden Goose", url: "goldengoose.com" },
        { name: "Chrome Hearts", url: "chromehearts.com" },
        { name: "Goyard", url: "goyard.com" },
        { name: "Hermès", url: "hermes.com" },
        { name: "Marsèll", url: "marsell.com" },
        { name: "Rick Owens", url: "rickowens.eu" },
        { name: "Maison Margiela", url: "maisonmargiela.com" },
        { name: "Acne Studios", url: "acnestudios.com" }
      ]
    },
    {
      title: "Perfume",
      icon: Sparkles,
      items: [
        { name: "Misk&Anber", url: "miskanber.com" },
        { name: "Sevil", url: "sevil.com.tr" },
        { name: "Boyner", url: "boyner.com.tr" },
        { name: "Fragrantica", url: "fragrantica.com" },
        { name: "Sephora TR", url: "sephora.com.tr" },
        { name: "Parfumo", url: "parfumo.com" }
      ]
    },
    {
      title: "Jewelry",
      icon: Diamond,
      items: [
        { name: "Chrome Hearts", url: "chromehearts.com" },
        { name: "TwoJeys", url: "twojeys.com" },
        { name: "Raftaf", url: "raftaf.com" },
        { name: "Vakkorama", url: "vakkorama.com.tr" },
        { name: "Shopi go", url: "shopigo.com" },
        { name: "Miansai", url: "miansai.com" },
        { name: "le gramme", url: "legramme.com" },
        { name: "AMBUSH", url: "ambushdesign.com" }
      ]
    }
  ]

  return (
    <div className="relative w-full bg-black overflow-hidden">
      <AnimatedBackground />


      {/* Categories */}
      <main className="relative z-10 px-6 pb-20 pt-12">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl">
          {data.map((category) => (
            <CategorySection
              key={category.title}
              category={category}
            />
          ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 py-8 text-center text-gray-500 border-t border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-sm">designed by kk</p>
      </motion.footer>
    </div>
  )
}

export default FashAnimated
