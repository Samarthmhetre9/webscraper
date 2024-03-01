def parse_products(data : list , data2 : list):

    for d in data2:
        data.append(d)
        
    # Sort the deals based on savings and ratings
    sorted_deals = sorted(data, key=lambda x: (x['discount'], x['rating']), reverse=True)
    return sorted_deals