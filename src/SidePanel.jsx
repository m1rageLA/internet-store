import React, { useState } from "react";
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function SidePanel() {
    const [priceRange, setPriceRange] = useState([0, 100]);
    const updateRange = (e, data) => {
        setPriceRange(data);
    };
    const MAX = 100;
    const MIN = 0;
    const marks = [
        {
            value: MIN,
            label: '',
        },
        {
            value: MAX,
            label: '',
        },
    ];
    const categories = [
        "Obuwie",
        "Koszulki",
        "Spodnie",
    ];

    return (
        <Container maxWidth="sm">
            <span>Zakres cenowy</span>
            <br /><br />
            <Slider
                marks={marks}
                value={priceRange}
                onChange={updateRange}
                valueLabelDisplay="on"
            />
            <span>Kategorie</span>
            <FormGroup>
                {categories.map(category => (
                    <FormControlLabel control={<Checkbox />} label={category} />
                ))}
            </FormGroup>
        </Container>
    );
}

export default SidePanel;