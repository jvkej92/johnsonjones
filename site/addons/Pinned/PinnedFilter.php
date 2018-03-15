<?php

namespace Statamic\Addons\Pinned;

use Statamic\Extend\Filter;

class PinnedFilter extends Filter
{
    /**
     * Perform filtering on a collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function filter()
    {       
        return $filtered_posts;
    }
}
