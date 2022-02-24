import { useCallback, useState } from "react";


export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};

export const renderNodeWithCustomEvents = ({nodeDatum,toggleNode,handleNodeClick}) => (
    <>
    <g>
    {nodeDatum.name!=='Empty'&&(
      <circle cx="0" cy="-1" r="32" fill="#ffffff" strokeWidth="1" stroke="#009ef7"/>
    )}
    {nodeDatum.name==='Empty'&&(
      <circle cx="0" cy="-1" r="32" fill="#ffffff" stroke="#0000002f"/>
    )}
    
    </g>
    <g transform="translate(-33.999990,32.000000) scale(0.0500000,-0.0500000)"
        fill="#000000" stroke="none">            
        
        <path  strokeWidth="1" fill={nodeDatum.name!=='Empty'?'#009ef7':"#0000002f"} stroke="none" d="M592 1320 c-276 -38 -502 -246 -556 -512 -47 -229 15 -441 178 -604
        67 -68 97 -89 176 -127 113 -54 170 -67 292 -67 363 0 648 288 649 655 0 120
        -17 191 -72 304 -61 124 -162 223 -289 284 -134 64 -249 84 -378 67z m287 -73
        c176 -62 318 -206 382 -387 31 -88 34 -285 5 -370 -54 -159 -181 -309 -316
        -373 -81 -38 -200 -67 -277 -67 -149 1 -317 73 -428 184 -123 124 -179 260
        -179 436 0 114 24 204 80 303 61 111 192 222 313 268 87 32 127 38 241 35 82
        -2 121 -9 179 -29z"/>
        {nodeDatum.name!=='Empty'&&(
            <path d="M592 1141 c-60 -21 -114 -67 -145 -126 -34 -63 -31 -174 6 -239 l27
-49 -31 -31 c-86 -84 -129 -186 -129 -310 0 -92 27 -151 83 -179 54 -28 189
-40 356 -33 208 8 254 35 272 161 16 119 -31 263 -116 354 -31 33 -42 52 -34
56 24 15 51 97 51 157 0 112 -72 212 -176 243 -64 19 -99 18 -164 -4z m166
-46 c78 -33 126 -106 126 -195 2 -177 -208 -274 -340 -157 -119 104 -88 298
57 356 37 15 116 13 157 -4z m-193 -425 c22 -11 48 -20 58 -20 16 0 18 -5 14
-27 -3 -16 -13 -85 -23 -156 l-18 -127 40 -40 40 -40 42 43 43 44 -20 127
c-29 178 -32 167 41 195 l62 24 47 -51 c56 -61 88 -140 96 -232 7 -87 -11
-138 -57 -164 -32 -19 -51 -21 -245 -21 -190 0 -214 2 -250 20 -23 11 -46 33
-54 50 -22 44 -17 158 9 228 22 59 102 167 123 167 7 0 30 -9 52 -20z m146
-184 l22 -139 -28 -24 -28 -24 -27 26 -27 26 19 122 c32 214 37 215 69 13z"/>
        )}
        {nodeDatum.name==='Empty'&&(
            <path fill="#0000002f" d="M589 1147 c-85 -32 -149 -103 -169 -188 -15 -63 -7 -119 27 -181 l26
            -48 -47 -50 c-109 -116 -149 -323 -83 -421 46 -69 66 -74 319 -77 209 -3 231
            -2 272 17 55 24 83 65 92 139 15 118 -30 254 -111 341 l-46 49 26 51 c14 28
            28 71 31 95 13 95 -50 212 -139 258 -52 26 -149 33 -198 15z m166 -56 c181
            -82 157 -341 -38 -392 -115 -31 -237 54 -254 179 -16 118 85 232 207 232 25 0
            63 -9 85 -19z m-194 -421 c59 -27 159 -26 218 0 24 11 53 18 63 14 34 -10 104
            -118 123 -187 25 -93 18 -198 -15 -232 -37 -37 -117 -48 -315 -43 -195 5 -237
            17 -261 74 -20 49 -17 145 7 217 28 82 96 175 130 177 4 0 26 -9 50 -20z"/>
        )}
        
    </g>
    {nodeDatum.name!=='Empty'&&(
    <g>
    <text fill="black" strokeWidth="1" x="40" onClick={toggleNode}>
      {nodeDatum.name} 
    </text>
      <text fill="black" x="44" dy="20" strokeWidth="1">
        PV: {nodeDatum.attributes?.PV}
      </text>
  </g>)}
  </>
);
export const handleNodeClick = (nodeDatum) => {
    window.alert(
        nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
    );
};

export const get_time = (date) => {
  if (date !== null && date !== "") {
    const d = new Date(date);
    let hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime =
      hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;
    return strTime;
  }
  return "";
};
export const get_date = (date) => {
  if (date !== null && date !== "") {
    const dateObj = new Date(date);
    const month = dateObj.getUTCMonth(); //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newdate = day + " " + months[month] + " " + year;
    return newdate;
  }
  return "";
};